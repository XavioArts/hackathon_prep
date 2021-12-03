Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :champs do
      resources :moves
    end
  end

  namespace :api do
    resources :villains
  end

end