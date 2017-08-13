import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Injectable()

export class GeneralService {
    constructor(private http: Http) {}

    search(input) {
        return this.http.get('http://localhost:3000/get/search/'+input)
        .map((res) => res.json())
    }

    makeBlogPost(id, body, username) {
        var data = {
            username: username,
            id: id,
            body: body
        }
        return this.http.post('http://localhost:3000/post/blogpost', data)
        .map(res => res.json())
    }

    deleteBlogPost(id) {
        return this.http.get('http://localhost:3000/get/deletepost/'+id)
        .map(res => res.json())
    }
     
    getAllPosts() {
        return this.http.get('http://localhost:3000/get/allposts')
        .map(res => res.json())
    }

    update(id, data) {
        return this.http.post('http://localhost:3000/post/updatepost/'+id, data)
        .map(res => res.json())
    }

    postComment(id, comment, username) {
        var data = {
            comment: comment,
            username: username,
            id: id
        }
        console.log(data);
        return this.http.post('http://localhost:3000/post/postcomment/'+id, data)
        .map(res => res.json())
    }
}