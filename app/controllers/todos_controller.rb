class TodosController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  #GET  /todos 
  def index
    todos = Todo.all
    render json: todos
  end

  #POST
  def create
    todo = Todo.create(todo_params)
    render json: todo
  end

  #Put 
  def update
    todo = find_todo
    todo.update(todo_params)
    render json: todo
    end
  end

  #DELETE 
  def destroy
    todo = find_todo
    todo.destroy 
    head :no_content
  end


  private
    

  def todo_params
    params.permit(:title, :done)
  end

  def find_todo
    Todo.find(params[:id])
  end

  def render_not_found_response
    render json: {error: "todo not found"}, status: :not_found
end

end
