const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.TextBox,
		C3.Plugins.Audio,
		C3.Plugins.TiledBg,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.TextBox.Acts.SetCSSStyle,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Touch.Cnds.OnDoubleTapGestureObject,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Exps.trim,
		C3.Plugins.TextBox.Exps.Text,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Acts.NextPrevLayout
	];
};
self.C3_JsPropNameTable = [
	{fondo: 0},
	{formula: 0},
	{texto_formula: 0},
	{numero: 0},
	{id: 0},
	{texto_numero: 0},
	{Audio: 0},
	{plano: 0},
	{punto: 0},
	{Mouse: 0},
	{Touch: 0},
	{paso: 0},
	{aplaudiendo: 0},
	{aplaudiendo2: 0},
	{valores_correctos: 0}
];

self.InstanceType = {
	fondo: class extends self.ISpriteInstance {},
	texto_formula: class extends self.ITextInputInstance {},
	texto_numero: class extends self.ITextInputInstance {},
	Audio: class extends self.IInstance {},
	plano: class extends self.ITiledBackgroundInstance {},
	punto: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	paso: class extends self.ISpriteInstance {}
}