namespace RealTimeChartAPI.Models
{
    public class ChartModel
    {
        public ChartModel()
        {
            Data = new List<int>();
        }

        public List<int> Data { get; set; }

        public string Label { get; set; }
    }
}
