import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class GeneralService {

    private port: number = 8080;
    private URL: string = `http://localhost:${this.port}`
    constructor(private http: Http) {}

    search(input) {
        return this.http.get('http://localhost:8080/get/search/'+input)
        .map((res) => res.json())
    }

    makeBlogPost(id: string, body: string, username: string, title: string, imageURL: string) {
        let data = {
            title: title,
            username: username,
            id: id,
            body: body,
            imageURL: imageURL
        }
        return this.http.post('http://localhost:8080/post/blogpost', data)
        .map(res => res.json())
    }

    deleteBlogPost(id: string) {
        return this.http.get('http://localhost:8080/get/deletepost/'+id)
        .map(res => res.json())
    }
     
    getAllPosts() {
        return this.http.get('http://localhost:8080/get/allposts')
        .map(res => res.json())
    }

    updatePost(id: string, data: object) {
        return this.http.post('http://localhost:8080/post/updatepost/'+id, data)
        .map(res => res.json())
    }

    postComment(id: string, comment: string, username: string, imageURL: string) {
        let data = {
            comment: comment,
            username: username,
            id: id,
            imageURL: imageURL
        }
        console.log(data);
        return this.http.post('http://localhost:8080/post/postcomment/'+id, data)
        .map(res => res.json())
    }

    uploadImage(formData, uploadId) {
        return this.http.post(`${this.URL}/post/upload/${uploadId}`, formData)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
     }

    loadSinglePost(id) {
        return this.http.get(`${this.URL}/get/loadPost/${id}`)
        .map(res => res.json())
    }

}