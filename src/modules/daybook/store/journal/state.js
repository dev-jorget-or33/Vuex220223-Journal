export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque soluta facilis quas, obcaecati voluptates excepturi et ipsa ea nihil nobis! Similique, accusamus dolor. Voluptates quos culpa perspiciatis cupiditate architecto odit.",
            picture: null

        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: "Pnsectetur adipisicing elit. Doloremque soluta facilis quas, obcaecati voluptates excepturi et ipsa ea nihil nobis! Similique, accusamus dolor. Voluptates quos culpa perspiciatis cupiditate architecto odit.",
            picture: null

        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: "Doloremque soluta facilis quas, obcaecati voluptates excepturi et ipsa ea nihil nobis! Similique, accusamus dolor. Voluptates quos culpa perspiciatis cupiditate architecto odit.",
            picture: null

        },
    ]
})