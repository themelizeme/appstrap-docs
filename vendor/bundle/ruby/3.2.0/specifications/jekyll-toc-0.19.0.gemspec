# -*- encoding: utf-8 -*-
# stub: jekyll-toc 0.19.0 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-toc".freeze
  s.version = "0.19.0".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "changelog_uri" => "https://github.com/toshimaru/jekyll-toc/releases", "homepage_uri" => "https://github.com/toshimaru/jekyll-toc", "rubygems_mfa_required" => "true", "source_code_uri" => "https://github.com/toshimaru/jekyll-toc" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["toshimaru".freeze, "torbjoernk".freeze]
  s.date = "2024-05-19"
  s.description = "Jekyll (Ruby static website generator) plugin which generates a Table of Contents for the page.".freeze
  s.email = "me@toshimaru.net".freeze
  s.homepage = "https://github.com/toshimaru/jekyll-toc".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.7".freeze)
  s.rubygems_version = "3.5.9".freeze
  s.summary = "Jekyll Table of Contents plugin".freeze

  s.installed_by_version = "3.5.17".freeze if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_runtime_dependency(%q<jekyll>.freeze, [">= 3.9".freeze])
  s.add_runtime_dependency(%q<nokogiri>.freeze, ["~> 1.12".freeze])
end
