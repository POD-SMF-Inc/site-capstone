import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';

class Post extends Component {
    render () {
        return (
        <div class="profile-info col-md-9">
              <div class="panel">
                <form>
                  <textarea
                    placeholder="Whats in your mind today?"
                    rows="2"
                    class="form-control input-lg p-text-area"
                  ></textarea>
                </form>
                <footer class="panel-footer">
                  
                  <ul class="nav nav-pills">
                    <li>
                      <a href="#" >
                
                        <FontAwesomeIcon icon={faMapMarked} size="1.5x" />
                        <i class="fa fa-map-marker"></i>
                      </a>
                    </li>
                    <button class="btn btn-warning pull-right">Post</button>
                  </ul>
                </footer>
              </div>
              <div class="bio-graph-heading">
              Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
          </div>
            </div>
        );  
    }
}

export default Post;