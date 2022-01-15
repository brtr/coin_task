Rails.application.routes.draw do
  root to: "tasks#index"

  resources :tasks, only: [:index, :create] do
    member do
      put :take
      put :complete
      put :confirm
      put :update
    end
  end
end
