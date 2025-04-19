export const linearChatData = {
    labels: ["Routing Speed", "Startup Time", "Middleware Flexibility", "Community", "Performance"],

    datasets: [
        {
            label: "Express",
            data: [7, 5, 9, 10, 6],
            borderColor: "rgb(255, 99, 132)",
            tension: 0.4,
            fill: false
        },
        {
            label: "Fastify",
            data: [9, 9, 8, 7, 9],
            borderColor: "rgb(54, 162, 235)",
            tension: 0.4,
            fill: false
        },
        {
            label: "Hono",
            data: [0, 10, 7, 4, 10],
            borderColor: "rgb(75, 192, 192)",
            tension: 0.4,
            fill: false
        },
        {
            label: "Intent",
            data: [10, 10, 10, 0, 10],
            borderColor: "rgb(152,212,34)",
            tension: 0.4,
            fill: false
        }
    ]
}
