export default {
  methods: {
    dataSet(arr, xKey, yKey, opt = {}) {
      return {
        labels: arr.map(v => v[xKey]),
        datasets: [{
          label: '',
          borderWidth: 2,
          backgroundColor: 'transparent',
          pointBorderWidth: 0,
          pointBackgroundColor: '#13cdaf',
          data: arr.map(v => v[yKey]),
          ...opt
        }]
      }
    }
  }
}