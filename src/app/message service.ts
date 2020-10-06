import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MessageSercive {

    allMessage = [];
    shareMessage = new BehaviorSubject<any>("");

    addMessage(title: string, description: string) {
        const msg = { title: title, description: description };
        this.allMessage.push(msg);
        this.shareMessage.next([...this.allMessage]);
    }

    getMessage() {
        return [...this.allMessage];
        
    }
    shareUpdate(){
        return this.shareMessage.asObservable();
    }
}