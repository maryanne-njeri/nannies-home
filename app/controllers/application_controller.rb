# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
    include ActionController::Cookies
    protect_from_forgery with: :null_session,
    if: Proc.new { |c| c.request.format =~ %r{application/json} }
    
    include ActionController::Cookies

    before_action :authorized

    def authorized
        return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
