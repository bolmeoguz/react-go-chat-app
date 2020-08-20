package main

import (
	"fmt"
	"net/http"

	"github.com/oguzbolme/react-go-chat-app/pkg/websocket"
)

func serveWs(pool *websocket.Pool, w http.ResponseWriter, r *http.Request, uc <-chan string) {
	fmt.Println("WebSocket Endpoint Hit")
	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}

	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
		Username:"",
	}

	client.Username = <-uc

	pool.Register <- client
	client.Read()
}

func setupRoutes() {
	pool := websocket.NewPool()
	go pool.Start()

	uc:=make(chan string,1)

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(pool, w, r, uc)
	})

	http.HandleFunc("/username", func(w http.ResponseWriter, r *http.Request) {
		if r.Method!="POST"{
			return
		}
		username:=r.FormValue("username")
		uc <- username
	})
}

func main() {
	fmt.Println("ozibuo's chat app")
	setupRoutes()
	http.ListenAndServe(":1999", nil)
}