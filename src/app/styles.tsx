export const pallet = {
    text: "#110623",
    background: "#f0e9fb",
    backgroundTwo: "#e8e2f3",
    primary: "#a67de8",
    secondary: "#dbcbf6",
    accent: "#6625d0",
}

export const useColors = (theme: string) => {
    if (theme == "dark") {
        return {
            text: "#FCFCFC",
            background: "#262A2F",
            primary: "#704AAB",
            secondary: "#373D40",
        }
    } else {
        return {
            text: "#343434",
            background: "#F2F2F2",
            primary: "#704AAB",
            secondary: "#FFFFFF",
        }
    }
}