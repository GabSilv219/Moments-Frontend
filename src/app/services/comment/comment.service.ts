import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Comment } from 'src/app/interfaces/Comment';
import { Response } from 'src/app/interfaces/Response';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) {}

  createComment(data: Comment): Observable<Response<Comment>> {
    const url = `${this.apiUrl}/create-comment/${data.momentId}`;
    return this.http.post<Response<Comment>>(url, data);
  }
}
