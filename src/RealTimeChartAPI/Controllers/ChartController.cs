using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using RealTimeChartAPI.DataStorage;
using RealTimeChartAPI.HubConfig;
using RealTimeChartAPI.TimerFeatures;

namespace RealTimeChartAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class ChartController : ControllerBase
    {
        private readonly IHubContext<ChartHub> _hub;

        public ChartController(IHubContext<ChartHub> hub)
        {
            _hub = hub;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var timerManager = new TimerManager(() => _hub.Clients.All.SendAsync("transferchartdata", DataManager.GetData()));

            return Ok(new { Message = "Request Completed" });
        }
    }
}
