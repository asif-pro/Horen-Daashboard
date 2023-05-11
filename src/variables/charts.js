export const barChartData = [
  {
    name: "Sales",
    data: [330, 250, 110, 300, 490, 350, 270, 130, 425],
  },
];

export const barChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      backgroundColor: "red",
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        backgroundColor: "red",
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    show: false,
    labels: {
      show: false,
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    color: "#fff",
    labels: {
      show: true,
      style: {
        colors: "#fff",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
  },
  fill: {
    colors: "#fff",
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      columnWidth: "12px",
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
          },
        },
      },
    },
  ],
};

export const lineChartData = [
  {
    name: "Mobile apps",
    data: [50, 40, 300, 220, 500, 250, 400, 230, 500, 220, 500, 250,],
  },
  {
    name: "Websites",
    data: [30, 90, 40, 140, 290, 290, 340, 230, 400,140, 290, 290,],
  },

    // {
    //   name: 'Bell Curve',
    //   data: [
    //     10, 20, 30, 40, 50, 60, 70, 80, 95, 105,
    //     102, 90, 80, 70, 60, 50, 40, 30, 20, 10,0
    //   ]
    // }
  
];

export const lineChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#4FD1C5", "#2D3748"],
  },
  colors: ["#4FD1C5", "#2D3748"],
  // chart: {
  //   toolbar: {
  //     show: false
  //   },
  // },
  // tooltip: {
  //   theme: 'dark',
  // },
  // dataLabels: {
  //   enabled: false,
  // },
  // stroke: {
  //   curve: 'smooth',
  // },
  // xaxis: {
  //   categories: [
  //     '1', '5', '10', '15', '20',
  //     '25', '30', '35', '40', '45','50','55','60','65','70','75','80','85','90','95','100'
  //   ],
  //   labels: {
  //     style: {
  //       colors: '#C8CFCA',
  //       fontSize: '12px',
  //     },
  //   },
  // },
  // yaxis: {
  //   labels: {
  //     style: {
  //       colors: '#C8CFCA',
  //       fontSize: '12px',
  //     },
  //   },
  // },
  // legend: {
  //   show: false,
  // },
  // grid: {
  //   strokeDashArray: 5,
  // },
  // fill: {
  //   type: 'gradient',
  //   gradient: {
  //     shade: 'light',
  //     type: 'vertical',
  //     shadeIntensity: 0.5,
  //     gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
  //     inverseColors: true,
  //     opacityFrom: 0.8,
  //     opacityTo: 0,
  //     stops: [],
  //   },
  //   colors: ['#4FD1C5', '#2D3748'],
  // },
  // colors: ['#4FD1C5', '#2D3748'],
};

export const bellChartData = [

    {
      name: 'Bell Curve',
      data: Array.from({ length: 50}, () => {
        return (1 / (1 * Math.sqrt(2 * Math.PI))) * Math.exp(-Math.pow(Math.random() - 0, 2) / (2 * Math.pow(1, 2)));
      })
    }
  
];

export const bellChartOptions = {
  chart: {
    toolbar: {
      show: false
    },
  },
  tooltip: {
    theme: 'dark',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: Array.from({ length: 50}, (_, i) => i + 1),
    labels: {
      style: {
        colors: '#C8CFCA',
        fontSize: '12px',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#C8CFCA',
        fontSize: '12px',
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.5,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ['#4FD1C5', '#2D3748'],
  },
  colors: ['#4FD1C5', '#2D3748'],
};
