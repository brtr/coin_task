Rails.application.routes.draw do
  root to: "tasks#index"

  resources :tasks, except: [:new, :edit] do
    member do
      put :take
      put :complete
      put :confirm
    end
  end
end
