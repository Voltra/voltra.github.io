<template>
	<a-layout>
		<a-layout-content>
			<a-card v-bind="card" title="Compétences générales">
				Je suis très confortable avec l'anglais et suis parfaitement
				capable d'initier et tenir une conversation ainsi que de rédiger
				des documents écrits.<br/>
				J'ai également, par ma formation en IUT et à Polytech, des notions
				d'économie, de gestion, de communication et de gestion de projets.
			</a-card>

			<a-card v-bind="card" title="Langages de programmation">
				<a-row v-bind="row"> 
					<a-col v-bind="col">
						Langages maîtrisés&nbsp;:
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
						Langages appréhendés&nbsp;:
						<ul>
							<li>
								<ExternalLink href="https://github.com/Voltra/streamz/blob/master/src/stream.ts">
									Typescript
								</ExternalLink>
							</li>
							<li>
								Python
								<small>
									(merci de ne pas me le faire utiliser)
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
						</ul>
					</a-col>
				</a-row>
			</a-card>

			<a-card v-bind="card" title="Bibliothèques et frameworks">
				<a-row v-bind="row"> 
					<a-col v-bind="col"> 
						Bibliothèques/Frameworks maîtrisés&nbsp;:
						<ul>
							<li>
								<ExternalLink href="https://gist.github.com/Voltra/acb8bfc443f61b8318151f271728c340">
									Vue
									<small>
										(
										vuex,
										vue-router,
										vue-routisan,
										vuex-pathify
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
							<li>Twig</li>
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
						Bibliothèques/Frameworks abordés&nbsp;:
						<ul>
							<li>Electron</li>
							<li>Flutter</li>
							<li>Laravel</li>
							<li>Drupal</li>
							<li>Wordpress</li>
							<li>React</li>
							<li>Redux</li>
							<li>Prestashop</li>
							<li>Qt</li>
							<li>
								<ExternalLink href="https://github.com/Voltra/cppcrow_test/blob/master/main.cpp">
									Crow
								</ExternalLink>
							</li>
							<li>Boost</li>
							<li>
								Symfony
								<small>
									(très légèrement)
								</small>
							</li>
							<li>Nickel</li>
							<li>Rocket</li>
						</ul>
					</a-col>
				</a-row>
			</a-card>

			<a-card v-bind="card" title="Outils">
				<a-row v-bind="row">
					<a-col v-bind="col">
						Outils maîtrisés&nbsp;:
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
							<li>IDE JetBrains</li>
							<li>Brackets</li>
							<li>Visual Studio Code</li>
						</ul>
					</a-col>

					<a-col v-bind="col">
						Outils appréhendés&nbsp;:
						<ul>
							<li>Vim</li>
							<li>
								NoSQL
								<small>
									(
									MongoDB
									)
								</small>
							</li>
							<li>Docker</li>
							<li>Ansible</li>
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
