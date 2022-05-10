import React from 'react'

function Nav() {
  return (
      <div className="ui segment">
          <div class="ui secondary  menu">
              <a class="active item">Home</a>
              <a class="item">Ezekiel</a>
              <a class="item">Edward</a>
              <div class="right menu">
                  <div class="item">
                      <div class="ui icon input">
                          <input type="text" placeholder="Search..." />
                          <i class="search link icon"></i>
                      </div>
                  </div>
                  <a class="ui item">Logout</a>
              </div>
          </div>
      </div>
  )
}

export default Nav