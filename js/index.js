var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var API = 'https://api.github.com/users';var
App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      username: 'theham3d',
      name: '',
      avatar: '',
      location: '',
      repos: '',
      followers: '',
      following: '',
      homeUrl: '',
      notFound: '' };return _this;

  }_createClass(App, [{ key: 'fetchProfile', value: function fetchProfile(
    username) {var _this2 = this;
      var url = API + '/' + username;
      fetch(url).
      then(function (res) {return res.json();}).
      then(function (data) {
        _this2.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
          notFound: data.message });

      }).
      catch(function (error) {return console.log('Oops! . There Is A Problem');});
    } }, { key: 'componentDidMount', value: function componentDidMount()
    {
      this.fetchProfile(this.state.username);
    } }, { key: 'render', value: function render()
    {
      return (
        React.createElement('div', null,
          React.createElement('section', { id: 'card' },
            React.createElement(SearchProfile, { fetchProfile: this.fetchProfile.bind(this) }),
            React.createElement(Profile, { data: this.state })),

          React.createElement('span', { className: 'hesmaili' }, 'GitHub Card With ReactJs - Created By ', React.createElement('a', { href: 'https://twitter.com/theham3d', target: '_blank', title: 'Hamed Esmaili' }, 'Hamed Esmaili'))));


    } }]);return App;}(React.Component);var

SearchProfile = function (_React$Component2) {_inherits(SearchProfile, _React$Component2);function SearchProfile() {_classCallCheck(this, SearchProfile);return _possibleConstructorReturn(this, (SearchProfile.__proto__ || Object.getPrototypeOf(SearchProfile)).apply(this, arguments));}_createClass(SearchProfile, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { className: 'search--box' },
          React.createElement('form', { onSubmit: this.handleForm.bind(this) },
            React.createElement('label', null, React.createElement('input', { type: 'search', ref: 'username', placeholder: 'Type Username + Enter' })))));



    } }, { key: 'handleForm', value: function handleForm(

    e) {
      e.preventDefault();
      var username = this.refs.username.getDOMNode().value;
      this.props.fetchProfile(username);
      this.refs.username.getDOMNode().value = '';
    } }]);return SearchProfile;}(React.Component);var


Profile = function (_React$Component3) {_inherits(Profile, _React$Component3);function Profile() {_classCallCheck(this, Profile);return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));}_createClass(Profile, [{ key: 'render', value: function render()
    {
      var data = this.props.data;
      var followers = data.homeUrl + '/followers';
      var repositories = data.homeUrl + '?tab=repositories';
      var following = data.homeUrl + '/following';
      if (data.notFound === 'Not Found')
      return (
        React.createElement('div', { className: 'notfound' },
          React.createElement('h2', null, 'Oops !!!'),
          React.createElement('p', null, 'The Component Couldn\'t Find The You Were Looking For . Try Again ')));else



      return (
        React.createElement('section', { className: 'github--profile' },
          React.createElement('div', { className: 'github--profile__info' },
            React.createElement('a', { href: data.homeUrl, target: '_blank', title: data.name || data.username }, React.createElement('img', { src: data.avatar, alt: data.username })),
            React.createElement('h2', null, React.createElement('a', { href: data.homeUrl, title: data.username, target: '_blank' }, data.name || data.username)),
            React.createElement('h3', null, data.location || 'I Live In My Mind')),

          React.createElement('div', { className: 'github--profile__state' },
            React.createElement('ul', null,
              React.createElement('li', null,
                React.createElement('a', { href: followers, target: '_blank', title: 'Number Of Followers' }, React.createElement('i', null, data.followers), React.createElement('span', null, 'Followers'))),

              React.createElement('li', null,
                React.createElement('a', { href: repositories, target: '_blank', title: 'Number Of Repositoriy' }, React.createElement('i', null, data.repos), React.createElement('span', null, 'Repositoriy'))),

              React.createElement('li', null,
                React.createElement('a', { href: following, target: '_blank', title: 'Number Of Following' }, React.createElement('i', null, data.following), React.createElement('span', null, 'Following')))))));





    } }]);return Profile;}(React.Component);


React.render(React.createElement(App, null), document.body);