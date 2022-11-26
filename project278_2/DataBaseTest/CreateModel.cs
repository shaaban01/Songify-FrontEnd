using DataBaseTest;
using DataBaseTest.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

public class CreateModel : PageModel
{
    private readonly DataContext _context;

    public CreateModel(DataContext context)
    {
        _context = context;
    }

    public IActionResult OnGet()
    {
        return Page();
    }

    [TempData]
    public string Message { get; set; }

    [BindProperty]
    public Personal_Info Customer { get; set; }

    public async Task<IActionResult> OnPostAsync()
    {
        if (!ModelState.IsValid)
        {
            return Page();
        }

        await _context.SaveChangesAsync();
        Message = $"Customer {Customer.Fname} added";

        return RedirectToPage("./IndexPeek");
    }
}