Rails.application.routes.draw do
  root "pages#home"
  get "/home", to: "pages#home", as: "home"
  get "about" => 'pages#about'
  get "work" => 'pages#work'
  get "contact" => 'pages#contact'
end
