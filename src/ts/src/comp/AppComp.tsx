import * as m from 'mithril'
import { MithrilTsxComponent } from 'mithril-tsx-component'

export interface IAppCompAttrs { }

type Vnode = m.Vnode<IAppCompAttrs, AppComp>
type VnodeDOM = m.VnodeDOM<IAppCompAttrs, AppComp>

export class AppComp extends MithrilTsxComponent<IAppCompAttrs> {

	// oninit(v: Vnode) {}
	// onbeforeupdate(v: Vnode, o: VnodeDOM) {}
	view(v: Vnode) {
		return (
			<section>
				<div class="container is-fluid">
					<div class="level">
						<div class="level-left">
							<div class="level-item">
								<h1>My favourite albums &amp; tracks</h1>
							</div>
						</div>
					</div>
				</div>
				<div class="container is-fluid">
					<div class="columns">
						<div class="column">
							First column
						</div>
						<div class="column">
							Second column
						</div>
						<div class="column">
							Third column
						</div>
					</div>
				</div>
			</section>
		)
	}
	// oncreate(v: VnodeDOM) {}
	// onupdate(v: VnodeDOM) {}
	// onbeforeremove(v: VnodeDOM) {}
	// onremove(v: VnodeDOM) {}
}