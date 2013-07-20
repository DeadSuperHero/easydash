module ApplicationHelper
	def avatar_for(user, options = {size: 40})
		avatar_id = Digest::MD5::hexdigest(current_user.email).downcase
		"https://seccdn.libravatar.org/avatar/#{avatar_id}.png?s=40"
	end
end
