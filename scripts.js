// KPIs (calculated)
const totalRevenue = sales.reduce((a, b) => a + b, 0);
const totalOrders = sales.length * 120;
const growth = (((sales[sales.length - 1] - sales[0]) / sales[0]) * 100).toFixed(1);

document.getElementById("revenue").innerText = "₹" + totalRevenue.toLocaleString();
document.getElementById("orders").innerText = totalOrders;
document.getElementById("growth").innerText = growth + "%";

// LINE CHART
new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: months,
    datasets: [{
      label: "Sales",
      data: sales,
      borderColor: "#00e5ff",
      fill: true,
      backgroundColor: "rgba(0,229,255,0.1)"
    }]
  }
});

// BAR CHART
new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: categories,
    datasets: [{
      label: "Revenue by Category",
      data: categorySales,
      backgroundColor: "#00e5ff"
    }]
  }
});