import { Route } from "../interface"
import { Server } from "@hapi/hapi"
import ExampleController from "../../api/example/Controller"

export default (): Route => {
  return {
    register: (server: Server) => {
      const controller = new ExampleController()
      server.bind(controller)

      server.route({
        method: "GET",
        path: "/example",
        options: {
          handler: controller.test,
          //   auth: "jwt",
          tags: ["api", "example"],
          description: "Say hello.",
          plugins: {
            "hapi-swagger": {
              responses: {
                "200": {
                  description: "found."
                },
                "401": {
                  description: "Please login."
                }
              }
            }
          }
        }
      })
    }
  }
}
