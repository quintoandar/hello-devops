package main

import (
	"net/http"
	"log"
	"encoding/json"
)

type Choice struct {
    Lang string
}

func main() {
	var addr string = "0.0.0.0:9000"
	http.HandleFunc("/", HelloServer)
	log.Print("Starting webserver on: " + addr)
	http.ListenAndServe(addr, nil)
}

func HelloServer(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST"{
		
		var c Choice

		err := json.NewDecoder(r.Body).Decode(&c)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
	
		log.Print("Logging user choice: " + c.Lang)
	}
}