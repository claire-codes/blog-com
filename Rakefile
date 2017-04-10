require 'stringex'

namespace :assets do
  task :precompile do
    puts `bundle exec jekyll build`
  end
end

source_dir = '.'
interests_posts_dir = "interesting/_posts"
posts_dir       = "_posts"    # directory for blog files
new_post_ext    = "markdown"  # default new post file extension when using the new_post task

# Nicked from Octopress
# usage rake new_post[my-new-post] or rake new_post['my new post'] or rake new_post (defaults to "new-post")
desc "Begin a new post in #{source_dir}/#{posts_dir}"
task :new_post, :title do |t, args|
  if args.title
    title = args.title
  else
    title = get_stdin("Enter a title for your post: ")
  end
  category = get_stdin("Enter a category for your post: ")
  mkdir_p "#{source_dir}/#{posts_dir}"
  filename = "#{source_dir}/#{posts_dir}/#{Time.now.strftime('%Y-%m-%d')}-#{title.to_url}.#{new_post_ext}"
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end
  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
    post.puts "summary: "
    post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M:%S')}"
    post.puts "comments: true"
    post.puts "published: true"
    post.puts "categories:"
    post.puts "- #{category}"
    post.puts "---"
  end
end

# usage rake interests
desc "Begin a new Interests post in #{source_dir}/#{interests_posts_dir}"
task :interests do
  interest_one = get_stdin("What's the first thing you're interested in this week? ")
  interest_two = get_stdin("What's the second? ")
  interest_three = get_stdin("And the third? (Add or delete as you wish in the file) ")
  mkdir_p "#{source_dir}/#{posts_dir}"
  filename = "#{source_dir}/#{interests_posts_dir}/#{Time.now.strftime('%Y-%m-%d')}-interests.#{new_post_ext}"
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end
  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{Time.now.strftime('%Y-%m-%d')}\""
    post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M:%S')}"
    post.puts "published: true"
    post.puts "interests:"
    post.puts "- #{interest_one}"
    post.puts "- #{interest_two}"
    post.puts "- #{interest_three}"
    post.puts "---"
  end
end

def get_stdin(message)
  print message
  STDIN.gets.chomp
end
