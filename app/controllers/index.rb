get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/euclid' do
  erb :euclid
end

get '/test' do
  erb :tests
end
