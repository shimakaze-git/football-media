<template>
  <div>
    <header class="header">
      <div class="navigation">
        <a href="#sp-side-menu" class="btn btn-default btn-sp" shape="rect"><i class="icon-menu"></i></a>
      </div>
      <div class="logo">
        <h1><a href="/" shape="rect">Player - Football Meida</a></h1>
      </div>
    </header>

    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#"></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2 form-control"
              placeholder="キーワード検索"
              id="keyword"
              value=""
              type="text"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">検索</b-button>
          </b-nav-form>

          <!--
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template v-slot:button-content>
                <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </div>
</template>

<style>
.header {
  position: relative;
  width: 100%;
  background-color: #fff;
}

.header .navigation {
  display: none;
}

.header .logo {
  text-align: center;
  width: 100%;
  border-bottom: 1px solid #e7e7e7;
}

.header .logo h1 {
  display: inline-block;
  margin: 20px 0;
}

.header .logo h1 a {
  /* background: url(../img/logo.png) no-repeat center; */
  width: 120px;
  height: 60px;
  white-space: nowrap;
  overflow: hidden;
  text-indent: 100%;
  border: 0;
}
</style>
