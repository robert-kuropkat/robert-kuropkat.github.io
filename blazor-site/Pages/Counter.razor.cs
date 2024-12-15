namespace blazor_site.Pages
{
    public partial class Counter
    {
        private int currentCount = 0;

        private void IncrementCount()
        {
            logger.LogInformation("Button Clicked!");
            currentCount++;
        }
    }
}