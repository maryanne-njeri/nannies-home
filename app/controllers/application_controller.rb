class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session,
    if: Proc.new { |c| c.request.format =~ %r{application/json} }
    
    include ActionController::Cookies

    before_action :authorize , only: [:create]

    def authorize
        return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
