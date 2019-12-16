import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  public dataChartSet3: Array<any> = [
    { data: [20, 10, 15, 20, 25, 30, 25], label:["Open"]}, 
    {data: [15, 16, 10, 25, 22, 23, 10], label:["Closed"]}
  ];
  public dataChartSet4: Array<any> = [
    { data: [20, 10, 15, 20, 25, 30, 25], label:["Open"]}, 
    {data: [15, 16, 10, 25, 22, 23, 10], label:["Closed"]}
  ]
  constructor() { }

  ngOnInit() {
  }
  title = 'Bar Chart Example in Angular 4';

  
  // ADD CHART OPTIONS. 
  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }

  labels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {
      label: '1st Year',
      data: [21, 56, 4, 31, 45, 15, 57, 61, 9, 17, 24, 59] 
    },
    { 
      label: '2nd Year',
      data: [47, 9, 28, 54, 77, 51, 24]
    }
  ];

  // CHART COLOR.
  colors = [
    { // 1st Year.
      backgroundColor: 'rgba(77,83,96,0.2)'
    },
    { // 2nd Year.
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ]
  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData = [
    {data: [120, 130, 180, 70], label: '2017'},
    {data: [90, 150, 200, 45], label: '2018'}
  ];
  public radarChartType = 'radar';



  public barChartType4: string = 'bar';
  public barChartLabels4: string[] = ["Gen Req", "Med 4.0", "Reported Prob", "Media Req", "Procurements", "Elected Officials", "CCC Plus"];
  public barChartColors4: Array<any>=[
    {backgroundColor: 'rgba(62, 182, 80, 0.8)', borderColor:'white', borderWidth: 1},
    {backgroundColor: 'rgba(251, 128, 35, 0.8)', borderColor:'white', borderWidth: 1}
  ]
  public barChartOptions4: any = {
    responsive:true,
   scales: {
     xAxes: [{
       // stacked:true,
       ticks: {
         fontColor: "white",
         fontSize: 14,
         // stepSize: 10,
         beginAtZero: true,
     },gridLines: {
         display:false
       }
   }],
     yAxes: [{
       // stacked:true,
         ticks: {
           fontColor: 'white',
           fontSize:18,
           // stepSize:10,
             // display:false,
             beginAtZero: true
         },gridLines: {
           display:false
         }
     }]
 }, 
 
 legend: {
   display: true,
   labels: {
     boxWidth: 10,
     fontColor: 'white',
     },
   },
   plugins: {
     labels: {
       render: 'value',
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





  public radarChartLabels3: string[] = ["Gen Req", "Med 4.0", "Reported Prob", "Media Req", "Procurements", "Elected Officials", "CCC Plus"];
  
  public radarChartType3: string = 'radar';
  public radarChartOptions3: any = {    
    legend: {
      labels: {
        // fontColor: 'white',
        boxWidth: 10
      },
      position: 'right'
    },
     layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    plugins: {
      labels: {
        render: 'value',
        fontColor: 'black'
      }
    },
  //   ,scales: {
  //     pointLabels:{
  //       display:true,
  //       fontColor:'#cc0000'
  //     },
      
  //   }
     

   }

}
