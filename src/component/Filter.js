import React from 'react'
import { Button, Form, FormControl } from "react-bootstrap";

function Filter({setSearched}) {
        return (
            <div className="Filter">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search for a cocktail"
                  onChange={(e) => {
                    e.target.value === ""
                      ? setSearched("")
                      : setSearched(e.target.value);
                  }}
                  className=" mr-sm-2"
                />
              </Form>
            </div>
    )
}

export default Filter
