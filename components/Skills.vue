<i18n lang="yaml">
fr:
  labels:
    general: Compétences générales
    programming: Langages de programmation
    libraries: Bibliothèques et frameworks
    tools: Outils
    mastered: Maîtrisés&nbsp;&colon;
    grasped: Appréhendés&nbsp;&colon;
  intro: |
    Je suis très confortable avec l'anglais et suis parfaitement
    capable d'initier et de tenir une conversation ainsi que de rédiger
    des documents écrits.<br/>
    J'ai également, par ma formation en IUT et à Polytech, des notions
    d'économie, de gestion, de communication et de gestion de projets.
  quips:
    dontMakeMeUseIt: merci de ne pas me le faire utiliser
    andFlutter: et Flutter
    justABit: très légèrement

en:
  labels:
    general: General skills
    programming: Programming languages
    libraries: Libraries and frameworks
    tools: Tools
    mastered: Mastered&colon;
    grasped: Grasped&colon;
  intro: |
    I'm more than comfortable with speaking in English and I'm able
    to initiate and hold a conversation as well as writing documents.<br/>
    Thanks to my studies, I also have notions of economy, management and communication.
  quips:
    dontMakeMeUseIt: please don't make me use that
    andFlutter: with Flutter
    justABit: just a bit
</i18n>

<template>
	<a-layout>
		<a-layout-content>
			<a-card v-bind="card" :title="$t('labels.general')">
				<span v-html="$t('intro')"/>
			</a-card>

			<a-card v-bind="card" :title="$t('labels.programming')">
				<a-row v-bind="row">
					<a-col v-bind="col">
						<span v-html="$t('labels.mastered')"/>
						<ul>
							<li>HTML</li>
							<li>
								<ExternalLink href="https://github.com/Voltra/spinner-lord/blob/master/css/spinner-lord.css">
									CSS
								</ExternalLink>
							</li>
							<li>
								<ExternalLink href="https://github.com/Voltra/SupportClassLibrary/blob/master/include/scl/async/Channel.h">
									C++
								</ExternalLink>
							</li>
							<li>
								<ExternalLink href="https://gist.github.com/Voltra/bf510bfa361f597a9f953722ac92f8d0">
									C
								</ExternalLink>
							</li>
							<li>
								<ExternalLink href="https://github.com/Voltra/vanillaFlash/blob/master/src/flash.js">
									JavaScript
								</ExternalLink>
							</li>
							<li>
								<ExternalLink href="https://github.com/Voltra/whitebox/blob/master/src/Routing/Controllers/A_ControllerSubRouter.php">
									PHP
								</ExternalLink>
							</li>
							<li>
								<ExternalLink href="https://github.com/Voltra/dotfiles/tree/master/installers">
									Shell
								</ExternalLink>
							</li>
							<li>
								<ExternalLink href="https://gist.github.com/Voltra/24eb79405b742c04005bd0abf505824a">
									SCSS
								</ExternalLink>
							</li>
							<li>
								<ExternalLink href="https://github.com/Voltra/Suricat/blob/master/src/main/java/ladysnake/models/DBTransactionExecution.java">
									Java
								</ExternalLink>
							</li>
						</ul>
					</a-col>

					<a-col v-bind="col">
						<span v-html="$t('labels.grasped')"/>
						<ul>
							<li>
								<ExternalLink href="https://github.com/Voltra/streamz/blob/master/src/stream.ts">
									Typescript
								</ExternalLink>
							</li>
							<li>
								Python
								<small>
									({{ $t('quips.dontMakeMeUseIt') }})
								</small>
							</li>
							<li>Ruby</li>
							<li>Haskell</li>
							<li>Go</li>
							<li>Rust</li>
							<li>Kotlin</li>
							<li>Perl</li>
							<li>OCaml</li>
							<li>PureScript</li>
							<li>
								<ExternalLink href="https://gist.github.com/Voltra/a74a6c5e4a3edf9003b505db7be10196">
									Prolog
								</ExternalLink>
							</li>
							<li>Crystal</li>
							<li>Less</li>
							<li>D</li>
							<li>
								<ExternalLink href="https://github.com/Voltra/mobile-youtube-dl/tree/dev">
									Dart
									<small>
										({{ $t('quips.andFlutter') }})
									</small>
								</ExternalLink>
							</li>
						</ul>
					</a-col>
				</a-row>
			</a-card>

			<a-card v-bind="card" :title="$t('labels.libraries')">
				<a-row v-bind="row">
					<a-col v-bind="col">
						<span v-html="$t('labels.mastered')"/>
						<ul>
							<li>
								<ExternalLink href="https://gist.github.com/Voltra/acb8bfc443f61b8318151f271728c340">
									Vue
									<small>
										(
										nuxt,
										vuex,
										vue-router,
										vue-routisan,
										vuex-pathify,
										vuex-orm
										)
									</small>
								</ExternalLink>
							</li>
							<li>
								<ExternalLink href="https://github.com/Voltra/vuelectron-music/blob/master/src/server.js">
									Express
									<small>
										(
										helmet,
										log4js,
										winston,
										express-session,
										passport,
										csurf,
										cookie-parser
										)
									</small>
								</ExternalLink>
							</li>
							<li>
								<ExternalLink href="https://gist.github.com/Voltra/a33a5cc4143705737c939bca8bedfd5c">
									Adonis
									<small>
										(
										adons-acl
										)
									</small>
								</ExternalLink>
							</li>
							<li>
								<ExternalLink href="https://github.com/Voltra/slim-vue-app/blob/master/dev/bootstrap.php">
									Slim
								</ExternalLink>
							</li>
							<li>
								<ExternalLink href="https://github.com/Voltra/validatueur/blob/feature/VALIDATORS/src/validators/index.ts#L573">
									MomentJS
								</ExternalLink>
							</li>
							<li>
								<ExternalLink href="https://github.com/Voltra/proj_web_client/blob/master/dev/js/setup/setupForm.js">
									jQuery
									<small>
										(
										jquery-ui,
										jq-flash,
										jq-cssvar
										)
									</small>
								</ExternalLink>
							</li>
							<li>
								<ExternalLink href="https://github.com/Voltra/slim-vue-app/blob/master/dev/views/.partials/layout.twig">
									Twig
								</ExternalLink>
							</li>
							<li>
								<ExternalLink href="https://github.com/Voltra/validatueur/blob/feature/VALIDATORS/tests/utils.test.ts">
									Jest
								</ExternalLink>
							</li>
							<li>
								<ExternalLink href="https://github.com/Voltra/whitebox/tree/master/tests">
									PHPUnit
								</ExternalLink>
							</li>
						</ul>
					</a-col>

					<a-col v-bind="col">
						<span v-html="$t('labels.grasped')"/>
						<ul>
							<li>
								<ExternalLink href="https://github.com/Voltra/vuelectron-music/blob/master/src/index.js">
									Electron
								</ExternalLink>
							</li>
							<li>Flutter</li>
							<li>Laravel</li>
							<li>Drupal</li>
							<li>Wordpress</li>
							<li>React</li>
							<li>Redux</li>
							<li>Prestashop</li>
							<li>
								Qt
								<small>
									(
									C++
									)
								</small>
							</li>
							<li>
								<ExternalLink href="https://github.com/Voltra/cppcrow_test/blob/master/main.cpp">
									Crow
									<small>
										(
										C++
										)
									</small>
								</ExternalLink>
							</li>
							<li>
								Boost
								<small>
									(
									C++
									)
								</small>
							</li>
							<li>
								Symfony
								<small>
									({{ $t('quips.justABit') }})
								</small>
							</li>
							<li>
								Nickel
								<small>
									(
									Rust
									)
								</small>
							</li>
							<li>
								Rocket
								<small>
									(
									Rust
									)
								</small>
							</li>
						</ul>
					</a-col>
				</a-row>
			</a-card>

			<a-card v-bind="card" :title="$t('labels.tools')">
				<a-row v-bind="row">
					<a-col v-bind="col">
						<span v-html="$t('labels.mastered')"/>
						<ul>
							<li>Git</li>
							<li>Git Flow</li>
							<li>Node</li>
							<li>NPM</li>
							<li>Yarn</li>
							<li>
								<ExternalLink href="https://github.com/Voltra/dotfiles/blob/master/config/webpack.config.js">
									Webpack
								</ExternalLink>
							</li>
							<li>
								<ExternalLink href="https://github.com/Voltra/dotfiles/blob/master/config/babel.config.js">
									Babel
								</ExternalLink>
							</li>
							<li>Apache</li>
							<li>
								SQL
								<small>
									(
										MySQL,
										PostgreSQL,
										Oracle
									)
								</small>
							</li>
							<li>
								IDE JetBrains
								<small>
									(
									Intellij IDEA,
									PHPStorm,
									CLion,
									Webstorm,
									Android Studio
									)
								</small>
							</li>
							<li>Brackets</li>
							<li>Visual Studio Code</li>
							<li>
								Suites bureautique
								<small>
									(
									Microsoft Office,
									Open Office,
									Libre Office
									)
								</small>
							</li>
						</ul>
					</a-col>

					<a-col v-bind="col">
						<span v-html="$t('labels.grasped')"/>
						<ul>
							<li>
								<ExternalLink href="https://github.com/Voltra/dotfiles/blob/master/.vimrc">
									Vim
								</ExternalLink>
							</li>
							<li>
								NoSQL
								<small>
									(
									MongoDB
									)
								</small>
							</li>
							<li>Redis</li>
							<li>Docker</li>
							<li>Ansible</li>
							<li>WebSockets</li>
							<li>GraphQL</li>
							<li>ImageMagick</li>
							<li>Photoshop</li>
						</ul>
					</a-col>
				</a-row>
			</a-card>
		</a-layout-content>
	</a-layout>
</template>

<script>
	import ExternalLink from "@/components/ExternalLink"

	export default {
		components: {
			ExternalLink,
		},
		data(){
			return {
				row: {
					type: "flex",
					align: "top",
					justify: "center",
					gutter: [16, 16],
				},
				col: {
					xs: 10,
					md: 6,
				},
				card: {
					bordered: false,
				},
			};
		},
	}
</script>
