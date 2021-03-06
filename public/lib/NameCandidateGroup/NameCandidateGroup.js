// Generated by CoffeeScript 1.6.3
/*

Exposed events:
 - actionButtonClicked
$(".name-candidate-action-button").on("actionButtonClicked", (event, nameCandidate, nameCandidateGroup)->


Sample Template:
<div>                                                   Name Candiate Group
    <p>喜欢的名字</p>                       Name Candiate Group Header
        <div>                                               Name Candiate
            <span>名字#1</span>                Name Candiate Text
            <button>喜欢</button>             Name Candiate Action Button
            <button>排除</button>
            <button>待定</button>
        </div>
        <div>
            <span>名字#2</span>
            <button>喜欢</button>
            <button>排除</button>
            <button>待定</button>
        </div>
</div>      


Sample Template after rendered:
<div class="name-candidate-group">
    <p class="name-candidate-group-header">喜欢的名字</p>
        <div class="name-candidate">
            <span class="name-candidate-text">名字#1</span>
            <button class="name-candidate-action-button">喜欢</button>
            <button class="name-candidate-action-button">排除</button>
            <button class="name-candidate-action-button">待定</button>
        </div>
        <div class="name-candidate">
            <span class="name-candidate-text">名字#2</span>
            <button class="name-candidate-action-button">喜欢</button>
            <button class="name-candidate-action-button">排除</button>
            <button class="name-candidate-action-button">待定</button>
        </div>
</div>
*/


(function() {
  var NameCandidate, NameCandidateGroup;

  NameCandidate = (function() {
    function NameCandidate(nameCandidate) {
      this.nameCandidate = nameCandidate;
      this.nameCandidate = $(this.nameCandidate);
    }

    NameCandidate.prototype.jQueryObj = function() {
      return this.nameCandidate;
    };

    NameCandidate.prototype.moveToGroup = function(anotherGroup, cb) {
      var _this = this;
      if (!$.contains(anotherGroup.group.get(0), this.jQueryObj().get(0))) {
        return this.jQueryObj().fadeOut('fast', function() {
          anotherGroup.addNameCandidate(_this);
          return _this.jQueryObj().fadeIn('slow', cb);
        });
      }
    };

    NameCandidate.prototype.removeFromGroup = function(cb) {
      return this.jQueryObj().fadeOut('slow', function() {
        $(this).remove();
        return cb();
      });
    };

    return NameCandidate;

  })();

  NameCandidateGroup = (function() {
    function NameCandidateGroup(group, opt) {
      this.group = group;
      this.group = $(this.group);
      this.options = {
        groupClass: "name-candidate-group",
        groupHeaderClass: "name-candidate-group-header",
        nameCandidateClass: "name-candidate",
        nameCandidateText: "name-candidate-text",
        nameCandidateActionButton: 'name-candidate-action-button'
      };
      $.extend(this.options, opt != null ? opt : {});
      this.groupHeader = this.group.find(">p");
    }

    NameCandidateGroup.prototype.jQueryObj = function() {
      return this.group;
    };

    NameCandidateGroup.prototype.__nameCandidates = function() {
      return this.group.find(">div");
    };

    NameCandidateGroup.prototype.render = function() {
      this.group.addClass(this.options.groupClass);
      this.groupHeader.addClass(this.options.groupHeaderClass);
      this.__nameCandidates().addClass(this.options.nameCandidateClass).find(">span").addClass(this.options.nameCandidateText).end().find(">button").addClass(this.options.nameCandidateActionButton).button().end();
      return this;
    };

    NameCandidateGroup.prototype.actionButtonClick = function(handler) {
      this.__nameCandidates().find("button." + this.options.nameCandidateActionButton).click(function(event) {
        var nameCandidate;
        nameCandidate = new NameCandidate($(this).parent());
        return handler.apply(this, _.toArray(arguments).concat([nameCandidate]));
      });
      return this;
    };

    NameCandidateGroup.prototype.addNameCandidate = function(nameCandidate) {
      if (!$.contains(this.group.get(0), nameCandidate.jQueryObj().get(0))) {
        return this.group.append(nameCandidate.jQueryObj());
      }
    };

    return NameCandidateGroup;

  })();

  this.NameCandidateGroup = NameCandidateGroup;

}).call(this);
