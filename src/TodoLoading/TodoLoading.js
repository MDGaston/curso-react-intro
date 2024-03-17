import React from "react";
import './TodoLoading.css'

function TodoLoading(){

    return (
      <div class="spinner-container">
        <div class="spinner">
          <div class="spinner">
          <div class="spinner">
            <div class="spinner">
              <div class="spinner">
                  <div class="spinner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export {TodoLoading} ;