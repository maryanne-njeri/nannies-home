# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
    # include ActionController::Cookies
    # protect_from_forgery with: :null_session,
    # if: Proc.new { |c| c.request.format =~ %r{application/json} }
    
    # include ActionController::Cookies

    # before_action :authorized

    # def authorized
    #     return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    # end

    include ActionController::Cookies

rescue_from ActiveRecord::RecordInvalid, with: :not_processable_entity
    before_action :authorized

    private

    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: {errors: ["Not Authorized"]}, status: :unauthorized unless @current_user
    end

    def not_processable_entity(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
