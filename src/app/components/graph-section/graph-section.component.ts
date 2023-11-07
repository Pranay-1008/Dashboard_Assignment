import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

// const data = {
//    chart: {
//      caption: "Sales Statistics",
//    //   subcaption: "By Provinces",
//      numvisibleplot: "12",
//      showvalues: "1",
//      decimals: "1",
//    //   stack100percent: "1",
//      valuefontcolor: "#FFFFFF",
//      theme: "gammel"
//    },
//    categories: [
//      {
//        category: [
//          {
//            label: "Jan"
//          },
//          {
//            label: "Feb"
//          },
//          {
//            label: "Mar"
//          },
//          {
//            label: "Apr"
//          },
//          {
//            label: "May"
//          },
//          {
//            label: "Jun"
//          },
//          {
//            label: "Jul"
//          },
//          {
//            label: "Aug"
//          },
//          {
//            label: "Sep"
//          },
//          {
//            label: "Oct"
//          },
//          {
//            label: "Nov"
//          },
//          {
//            label: "Dec"
//          },
//        ]
//      }
//    ],
//    dataset: [
//      {
//        seriesname: "Income",
//        data: [
//          {
//            value: "40"
//          },
//          {
//            value: "60"
//          },
//          {
//            value: "20"
//          },
//          {
//            value: "55"
//          },
//          {
//            value: "70"
//          },
//          {
//            value: "80"
//          },
//          {
//            value: "60"
//          },
//          {
//            value: "40"
//          },
//          {
//            value: "90"
//          },
//          {
//            value: "70"
//          },

//        ]
//      },
//      {
//        seriesname: "Borrow",
//        data: [
//            {
//                value: "60"
//              },
//              {
//                value: "80"
//              },
//              {
//                value: "30"
//              },
//              {
//                value: "75"
//              },
//              {
//                value: "90"
//              },
//              {
//                value: "70"
//              },
//              {
//                value: "70"
//              },
//              {
//                value: "50"
//              },
//              {
//                value: "100"
//              },
//              {
//                value: "40"
//              },
//        ]
//      }
//    ]
//  };

const data = {
  chart: {
    caption: "Support Tickets : Received vs Resolved",
    yaxisname: "# of Tickets",
    subcaption: "Last week",
    numdivlines: "3",
    showvalues: "0",
    legenditemfontsize: "15",
    legenditemfontbold: "1",
    plottooltext: "<b>$dataValue</b> Tickets $seriesName on $label",
    theme: "gammel"
  },
  categories: [
    {
      category: [
        {
          label: "Jan 1"
        },
        {
          label: "Jan 2"
        },
        {
          label: "Jan 3"
        },
        {
          label: "Jan 4"
        },
        {
          label: "Jan 5"
        },
        {
          label: "Jan 6"
        },
        {
          label: "Jan 7"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Received",
      data: [
        {
          value: "55"
        },
        {
          value: "45"
        },
        {
          value: "52"
        },
        {
          value: "29"
        },
        {
          value: "48"
        },
        {
          value: "28"
        },
        {
          value: "32"
        }
      ]
    },
    {
      seriesname: "Resolved",
      data: [
        {
          value: "50"
        },
        {
          value: "30"
        },
        {
          value: "49"
        },
        {
          value: "22"
        },
        {
          value: "43"
        },
        {
          value: "14"
        },
        {
          value: "31"
        }
      ]
    }
  ]
};

@Component({
  selector: 'app-graph-section',
  templateUrl: './graph-section.component.html',
  styleUrls: ['./graph-section.component.scss']
})

export class GraphSectionComponent {

  // width = 600;
  // height = 400;
  // type = "scrollstackedcolumn2d";
  // dataFormat = "json";
  // dataSource = data;

  width = 600;
  height = 400;
  type = "msspline";
  dataFormat = "json";
  dataSource = data;

  constructor() {
  }

  ngOnInit(): void {
    this.salesGraph()
    this.overviewGraph()
    this.topProductGraph()

  }

  // https://stackblitz.com/edit/angular-basic-areachart?file=src%2Fapp%2Fapp.component.ts,src%2Fapp%2Fapp.module.ts
  salesGraphOptions: any
  salesGraph() {
    this.salesGraphOptions = {
      chart: {
        type: 'area'
      },
      credits: {
        enabled: false,
      },
      title: {
        text: '',
        align: 'left',
      },
      legend: {
        enabled: false
      },
      xAxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
      },
      yAxis: {
        title: {
          text: ''
        },
      },
      tooltip: {
        pointFormat: '${point.x}'
      },
      plotOptions: {
        area: {
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: [{
        name: '',
        data: [
          0, 510, 530, 520, 538, 528, 515
        ],
        fillColor: '#f0f1f7' 
      },
      ]
    }

    Highcharts.chart('salesGraph', this.salesGraphOptions);
  }

  overviewGraphOptions: any
  overviewGraph() {
    this.overviewGraphOptions = {
      chart: {
        type: 'column'
      },
      credits: {
        enabled: false,
      },
      title: {
        text: '',
        align: 'left',
      },
      legend: {
        layout: 'horizontal',
        align: 'right',
        verticalAlign: 'top',
        x: 0,
        y: -40,
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          grouping: true, // Disable grouping to remove white space
        }
      },
      series: [
        {
          name: 'Borrow',
          data: [20, 20, 30, 40, 20, 20, 10, 15, 20, 40, 10, 15],
          color: '#a3b5f6'
        },{
        name: 'Income',
        data: [50, 80, 20, 90, 80, 70, 60, 100, 65, 55, 110, 95],
        color: '#4565e0'
      },]
    }

    Highcharts.chart('overviewGraph', this.overviewGraphOptions);
  }

  topProductGraphOptions: any
  topProductGraph() {
    this.topProductGraphOptions = {
      chart: {
        type: 'pie',
      },
      credits: {
        enabled: false,
      },
      // title: {
      //   text: 'Top Products',
      //   align: 'left',
      // },
      title: {
        text: '<b>50%</b><br>Popular Items',
        align: 'center',
        verticalAlign: 'middle',
        y: -25,
        style: {
          fontSize: '15px',
        },
    },

      plotOptions: {
        // pie: {
        //     innerSize: '70%', // Set the inner radius to create a donut chart
        //     dataLabels: {
        //         enabled: false,
        //         format: 'ABC'
        //     },
        // },
        pie: {
          innerSize: '70%',
          dataLabels: {
            enabled: false,
            format: '{point.name}: {point.y} ({point.percentage:.1f}%)',
            distance: -30, 
            color: 'white', 
            connectorWidth: 0,
            style: {
              textOutline: 'none' // Remove text outline
            }
          },
          showInLegend: true
        },
        
      },
      colors: ['#3c5ad0', '#90a6fa', '#4f6de1'],
      series: [
        {
          name: 'Data',
          data: [
            ['Men', 45],
            ['Electronic', 35],
            ['Womwn', 20],
          ],
        },
      ],
    }
    Highcharts.chart('topProduct', this.topProductGraphOptions);
  }
}
