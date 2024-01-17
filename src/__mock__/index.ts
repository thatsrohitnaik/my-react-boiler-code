import { createServer, Model } from "miragejs"

export default function () {
    createServer({
        models: {
            reminder: Model,
          },
      
        routes() {
            this.get("/api/reminders", () => ({
                reminders: [
                    { id: 1, text: "Walk the dog" },
                    { id: 2, text: "Take out the trash" },
                    { id: 3, text: "Work out" }
                ],
            }))

            this.post("/api/reminders", (schema:any, request:any) => {
                let attrs = JSON.parse(request.requestBody)
                console.log(schema, attrs)
                return { reminder: attrs }
            })
        },
    })
}