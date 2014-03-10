Portfolio::Application.routes.draw do

  root :to => 'welcome#index'

  match '/home', to: 'welcome#index'

end
