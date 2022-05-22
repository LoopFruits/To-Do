class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid,with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound,with: :render_not_found


  def index
    users = User.all
    render json: users
  end


  #Post /singup
  def create 
    user = User.create!(create_user_params)
    session[:user_id] = user.id
    render json:user, status: :created
  end

  #GET  
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end


  def update
    user = User.find(params[:id])
    user.update!(user_params)
    render json: user, status: :accepted
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end


  private 

  def create_user_params 
      params.permit(:first_name, :last_name, :username, :password, :password_confirmation )
  end

  def render_unprocessable_entity invalid
    render json: {errors: invalid.record.errors.full_messages},status: :unprocessable_entity
  end

  def render_not_found
    render json: {error: "User not found"}, status: 404
  end



end
