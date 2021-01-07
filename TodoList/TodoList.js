import React, { Component } from 'react';
import classes from './TodoList.module.css';
import Todo from '../../Components/Todo/Todo';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { title: 'Read', desc: 'Complete the book being read' },
                { title: 'Movie', desc: 'Watch another episode of Black clover' },
                { title: 'Code', desc: 'Finally finish this assignment' }
            ],
            title: {title: ''},
            desc: {desc: ''}
        }
    }
    render() {
        var myTodos = this.state.todos.map(myTodo => {
            return (
                <Todo
                    key={myTodo.title}
                    title={myTodo.title}
                    desc={myTodo.desc}
                />
            )
        });


        const postHandler = (e) => {
            e.preventDefault();
            
            var newTodo = [...this.state.todos];

            newTodo.push({title: this.state.title.title, desc: this.state.desc.desc});

            this.setState({todos: newTodo});
        }

        const onTitleChange = (e) => {
            let myTitle = {...this.state.title}
            let newItem = e.target.value;
            myTitle.title = newItem;

            this.setState({title: myTitle});
        }

        const onDescChange = (e) => {
            let myDesc = {...this.state.desc}
            let newItem = e.target.value;
            myDesc.desc = newItem;

            this.setState({desc: myDesc});
        }

        return (
            <div className={classes.TodoList}>
                <div>
                    <h2>My Todo</h2>
                    <form onSubmit={postHandler}>
                        <label htmlFor="title">Title:</label>
                        <div>
                            
                            <input type="text" name="title" id="title" onChange={onTitleChange} />
                        </div>
                        <label htmlFor="desc">Description:</label>
                        <div>
                            
                            <input type="text" name="desc" onChange={onDescChange} />
                        </div>
                        <button>Save</button>
                    </form>
                </div>
                <hr />
                <div>
                    <table className={classes.TodoListInner}>
                        <thead>
                            <tr>
                                <th> No </th>
                                <th>Title</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>

                            {myTodos}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TodoList;