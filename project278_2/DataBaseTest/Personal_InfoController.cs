using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DataBaseTest.Data;

namespace DataBaseTest
{
    [Route("api/[controller]")]
    [ApiController]
    public class Personal_InfoController : ControllerBase
    {
        private readonly DataContext _context;

        public Personal_InfoController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Personal_Info
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Personal_Info>>> GetpersonalInfo()
        {
            return await _context.personalInfo.ToListAsync();
        }

        // GET: api/Personal_Info/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Personal_Info>> GetPersonal_Info(string id)
        {
            var personal_Info = await _context.personalInfo.FindAsync(id);

            if (personal_Info == null)
            {
                return NotFound();
            }

            return personal_Info;
        }

        // PUT: api/Personal_Info/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPersonal_Info(string id, Personal_Info personal_Info)
        {
            if (id != personal_Info.Email)
            {
                return BadRequest();
            }

            _context.Entry(personal_Info).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Personal_InfoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Personal_Info
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Personal_Info>> PostPersonal_Info(Personal_Info personal_Info)
        {
            _context.personalInfo.Add(personal_Info);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (Personal_InfoExists(personal_Info.Email))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetPersonal_Info", new { id = personal_Info.Email }, personal_Info);
        }

        // DELETE: api/Personal_Info/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePersonal_Info(string id)
        {
            var personal_Info = await _context.personalInfo.FindAsync(id);
            if (personal_Info == null)
            {
                return NotFound();
            }

            _context.personalInfo.Remove(personal_Info);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Personal_InfoExists(string id)
        {
            return _context.personalInfo.Any(e => e.Email == id);
        }
    }
}
