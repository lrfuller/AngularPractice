import { Component } from '@angular/core';
import { Chart, ChartDataSets } from "chart.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testGraphs';

  public lineChartDataSystems: any = [22, 44, 5];
  public lineChartLabelsSystems: Array<any> = ["test1", "test2", "test3"];
  // public lineChartDataSystems: ChartDataSets<any> = [
  //   {
  //     data: [],
  //     label: "Top Ten Agencies",
  //     barThickness: 25,
  //   },
  // ];
  public chartColorsSystems: Array<any> = [
    {
      // first color
      backgroundColor: "#88BA9D",
      borderColor: "rgba(225,10,24,0.2)",
      pointBackgroundColor: "rgba(225,10,24,0.2)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(225,10,24,0.2)",
    },
  ];
  public chartOption1 = {
    responsive: true,
    maintainAspectRatio: false,
    showTooltips: false,
    hover: {
      onHover: function (e: any) {
        var point = this.getElementAtEvent(e);
      },
    },

    
    animation: {
      duration: 1000,
      onComplete: function () {
        var chartInstance = this.chart,
          ctx = chartInstance.ctx;
        ctx.font = Chart.helpers.fontString(
          Chart.defaults.global.defaultFontSize,
          Chart.defaults.global.defaultFontStyle,
          Chart.defaults.global.defaultFontFamily
        );
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        this.data.datasets.forEach((dataset: any, i: any) => {
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach((bar: any, index: any) => {
            var data = dataset.data[index];
            if (data > 0) {
              ctx.fillText(data, bar._model.x, bar._model.y - 5);
            }
          });
        });
      },
    },
    scales: {

    
      yAxes: [
        {
        
          ticks: {
            max: 500,
            beginAtZero: true,
            userCallback: (label: any, index: any, labels: any) => {
              if (Math.floor(label) === label) {
                return label;
              }
            },
          },
          stacked: false,
          display: true,
        },
      ],
      xAxes: [
     
        {
          display: true,
          gridLines: {
            display: true,
          },
           stacked: true ,
          ticks: {
            fontSize: 10,
          },
        },
      ],
    },
    legend: {
      labels: {
        fontColor: "#000",
        boxWidth: 10,
      },
      onHover: (e: any) => {
        e.target.style.cursor = "pointer";
      },
    },
  };

  constructor(){
    
  }
  ngOnInit(){
    this.setMax();
  }

  setMax(){
    let listMax = 0;
        this.lineChartDataSystems.forEach(c => {
          if (listMax<c){
            listMax = c;
          }
        });
        let maxVal = 100;

        if (listMax >= 75){
          listMax = Math.round(listMax / 50)*50
          maxVal = listMax + ((25 / 100) * listMax)
        }else if (listMax < 75){
          maxVal = 100;
        }else if(listMax <= 10){
          maxVal = 10;
        }else{
          maxVal = Math.round(listMax / 10)*10
        }

        this.chartOption1 = {
          responsive: true,
          maintainAspectRatio: false,
          showTooltips: false,
          hover: {
            onHover: function (e: any) {
              var point = this.getElementAtEvent(e);
            },
          },
      
          
          animation: {
            duration: 1000,
            onComplete: function () {
              var chartInstance = this.chart,
                ctx = chartInstance.ctx;
              ctx.font = Chart.helpers.fontString(
                Chart.defaults.global.defaultFontSize,
                Chart.defaults.global.defaultFontStyle,
                Chart.defaults.global.defaultFontFamily
              );
              ctx.textAlign = "center";
              ctx.textBaseline = "bottom";
              this.data.datasets.forEach((dataset: any, i: any) => {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach((bar: any, index: any) => {
                  var data = dataset.data[index];
                  if (data > 0) {
                    ctx.fillText(data, bar._model.x, bar._model.y - 5);
                  }
                });
              });
            },
          },
          scales: {
      
          
            yAxes: [
              {
              
                ticks: {
                  max:maxVal,
                  beginAtZero: true,
                  userCallback: (label: any, index: any, labels: any) => {
                    if (Math.floor(label) === label) {
                      return label;
                    }
                  },
                },
                stacked: false,
                display: true,
              },
            ],
            xAxes: [
           
              {
                display: true,
                gridLines: {
                  display: true,
                },
                 stacked: true ,
                ticks: {
                  fontSize: 10,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontColor: "#000",
              boxWidth: 10,
            },
            onHover: (e: any) => {
              e.target.style.cursor = "pointer";
            },
          },
        };
  }
}
