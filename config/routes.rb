Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'movies#home'
  resources :lists, only: %i[index show new create]
  resources :bookmarks, only: :destroy
  resources :movies, only: %i[show index] do
    resources :bookmarks, only: %i[new create]
  end
end
