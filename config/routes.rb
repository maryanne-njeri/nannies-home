Rails.application.routes.draw do
  resources :users
  resources :reviews
  resources :bookings
  resources :customers
  resources :profiles
  resources :personnels

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"                                                                                                                                                                                                                                                                                                                                                                                                                                                                             logout", to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
