import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js'
import { userDto } from '../userDto';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isShow1 = false;
  isShow2 = true;

  overallOpen = 21;
  overallClosed = 39;
  pendingShort = 10;
  pendingLong = 14;
  
  constructor(
    ) { 
      this.refresh();
  }

  toggleIcon() {
    if (this.isShow1 == false) {
      this.isShow1 = true;
      this.isShow2 = false;
    } else if (this.isShow1 == true) {
      this.isShow1 = false;
      this.isShow2 = true;
    }
  }

  ngOnInit() {

  }

  //based on the refreshNum set on loginPage, the page will refresh or do nothing on start
  refresh(): void{
    if(Number(sessionStorage.getItem("refreshNum")) == 1){
      sessionStorage.setItem('refreshNum', '2');
      console.log(sessionStorage.getItem('refreshNum'))
      // only works AFTER the user has logged in
      window.location.reload();
    }
  }

  
  public pieChartLabels: string[] = ["Overall Open", "Overall Closed", "Pending 7+ days", "Pending 14+ days"];
  public pieChartData: number[] = [this.overallOpen, this.overallClosed, this.pendingShort, this.pendingLong];
  public pieChartType: string = 'pie';
  public pieChartOptions: any = {
    // 'backgroundColor': [
    //   "#FF6384",
    //   "#4BC0C0",
    //   "#FFCE56",
    //   "#E7E9ED"
    // ],
    
    // title: {
    //   display: true,
    //   text: 'Your chart title',
    //   fontColor: 'white',  // chart title color (can be hexadecimal too)
    // },
    legend: {
      labels: {
        fontColor: 'white'
      }
      

    },
    animation: {
      duration: 2000,
      "onComplete": function () {
        let chartInstance = this.chart,
          ctx = chartInstance.ctx;

          //gives the numbers for each of the elements
        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
        ctx.textAlign = 'center';
        ctx.fontWeight = "bold";
        var textSize = chartInstance.width / 10;
        var radius = chartInstance.outerRadius;
        var midX = chartInstance.width / 2;
        var midY = chartInstance.height / 2
        this.data.datasets.forEach((dataset: any, i: any) => {
          let meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach((bar: any, index: any) => {
            let data = dataset.data[index];
            if (data > 0) {
              var w_offset = ctx.measureText(data).width / 2;
              var h_offset = textSize / 4;
              var startAngle = chartInstance.controller.getDatasetMeta(i).data[index]._model.startAngle;
              var endAngle = chartInstance.controller.getDatasetMeta(i).data[index]._model.endAngle;
              ctx.fillStyle = "white";
              var middleAngle = startAngle + ((endAngle - startAngle) / 2);
              var posX = (radius / 2) * Math.cos(middleAngle) + midX;
              var posY = (radius / 2) * Math.sin(middleAngle) + midY;
              ctx.fillText(data, posX + w_offset, posY + h_offset);

            }
          });
        });
      }

    }
    , layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }

  }
  // events on slice click
  public chartClicked(e: any): void {
    console.log(e);
  }
  // event on pie chart slice hover
  public chartHovered(e: any): void {
    console.log(e);
  }

  public barChartLabels: string[]=["Overall Open", "Overall Closed", "Pending 7+ days", "Pending 14+ days"];
  public barChartData: number[] = [this.overallOpen, this.overallClosed, this.pendingShort, this.pendingLong];
  public barChartType: string = 'bar';
  // barChartColors=[{
  //     backgroundColor: 'rgba(230, 0, 0, 0.70)'
  //   }]
  public barChartOptions: any = {
    borderWidth: 1,

    
    scales: {
      xAxes: [{
        ticks: {
          fontColor: "white",
          fontSize: 14,
          stepSize: 10,
          beginAtZero: true
      },gridLines: {
          display:false
        }
    }],
      yAxes: [{
          ticks: {
            fontColor: 'white',
            fontSize:18,
            stepSize:10,
              // display:false,
              beginAtZero: true
          }
      }]
  }, 
  
  legend: {

      labels: {
        fontColor: 'white' 
      }
    },

    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 10
      }
    }

    


  }


}
