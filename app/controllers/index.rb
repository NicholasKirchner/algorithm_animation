get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/euclid' do
  erb :euclid
end

get '/shunt' do
  erb :shunt
end

get '/test' do
  erb :tests
end
