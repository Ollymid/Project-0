"use strict";$(function(){function e(){u.addClass("hidden"),C.removeClass("hidden"),b.prop("disabled",!1),k.prop("disabled",!1),x.prop("disabled",!1),n()}function o(){u.removeClass("hidden"),m.addClass("hidden"),y.addClass("hidden"),b.prop("disabled",!1),k.prop("disabled",!1),x.prop("disabled",!1),n(),shuffle(questionBank)}function n(){D=questionBank[S],15===S?(u.addClass("hidden"),y.addClass("hidden"),C.addClass("hidden"),m.removeClass("hidden"),S=0):(f.html(D.question),I.html(D.answers[0]),M.html(D.answers[1]),B.html(D.answers[2]),j.html(D.answers[3]),S++)}function d(e){var o=questionBank[z];A.html(o.correctIndex[z]),D.correctIndex===$(e.target).index()?(console.log("working!"),n()):(console.log("you died"),u.addClass("hidden"),y.removeClass("hidden"),C.addClass("hidden"),S=0)}function s(){g.removeClass("hidden"),C.addClass("hidden")}function i(){var e=D.answers[D.correctIndex];g.addClass("hidden"),C.removeClass("hidden"),alert(e),b.prop("disabled",!0)}function l(){p.removeClass("hidden"),C.addClass("hidden"),w.html(D.answers[D.fiftyfifty[0]]),q.html(D.answers[D.fiftyfifty[1]]),console.log(D.fiftyfifty[0]),console.log(D.fiftyfifty[1])}function t(e){D.fiftyIndex===$(e.target).index("button.jerry")?(console.log("you live"),console.log(D.correctIndex),console.log($(e.target)),console.log($(e.target).index()),C.removeClass("hidden"),p.addClass("hidden"),n(),k.prop("disabled",!0)):(console.log("you died"),console.log(D.fiftyIndex),console.log($(e.target)),console.log($(e.target).index()),y.removeClass("hidden"),p.addClass("hidden"),S=0)}function a(){function e(){var e=[Math.random(),Math.random(),Math.random(),Math.random()],o=e.reduce(function(e,o){return e+o});return e.map(function(e){return Math.round(e/o*100)})}v.removeClass("hidden"),C.addClass("hidden");for(var o=e(),n=o.reduce(function(e,o){return e+o});100!==n;)o=e(),n=o.reduce(function(e,o){return e+o});console.log("After loop",o,n);var d=$(".bar"),s=$(".results li");o.forEach(function(e,o){d.eq(o).css("height",e+"%"),s.eq(o).text(e+"%")})}function r(){v.addClass("hidden"),C.removeClass("hidden"),x.prop("disabled",!0)}console.log("JS loaded!");var c=$(".start-button"),h=$(".reset-button"),f=$(".currentQ"),u=$("#start"),m=$("#well-done"),C=$("#game-board"),g=$("#meeseeks-box"),p=$("#fifty-fifty"),v=$("#council"),y=$("#game-over"),b=$(".choice1"),k=$(".choice2"),x=$(".choice3"),w=$("#choice1"),q=$("#choice2"),I=$(".option1"),M=$(".option2"),B=$(".option3"),j=$(".option4"),A=$(".answer"),E=$(".meeseseeksButton"),J=$(".jerry"),Q=$(".collectionofdouches"),S=0,z=0,D=null;c.on("click",e),A.on("click",d),b.on("click",s),E.on("click",i),k.on("click",l),J.on("click",t),x.on("click",a),Q.on("click",r),h.on("click",o)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwic3RhcnRHYW1lIiwiJGluc3RydWN0aW9ucyIsImFkZENsYXNzIiwiJGdhbWVCb2FyZCIsInJlbW92ZUNsYXNzIiwiJGNob2ljZTEiLCJwcm9wIiwiJGNob2ljZTIiLCIkY2hvaWNlMyIsInNob3dRdWVzdGlvbiIsInJlc3RhcnRHYW1lIiwiJHdlbGxEb25lIiwiJGdhbWVPdmVyIiwic2h1ZmZsZSIsInF1ZXN0aW9uQmFuayIsInF1ZXN0aW9uT2JqZWN0IiwicXVlc3Rpb25JbmRleCIsIiRxdWVzdGlvbkJveCIsImh0bWwiLCJxdWVzdGlvbiIsIiRidXR0b24yIiwiYW5zd2VycyIsIiRidXR0b24zIiwiJGJ1dHRvbjQiLCJJc0l0Y29ycmVjdCIsInJpZ2h0SW5kZXgiLCIkYnV0dG9ucyIsImNvcnJlY3RJbmRleCIsImNvbnNvbGUiLCJlIiwidGFyZ2V0IiwiaW5kZXgiLCJsb2ciLCJoZWxwZXJPbmUiLCIkcGhvbmVGcmllbmQiLCJtck1lZXNlZWtzIiwiYWxlcnQiLCJjb3JyZWN0QW5zd2VyIiwiaGVscGVyVHdvIiwiJGplcnJ5MiIsIiRqZXJyeTEiLCJmaWZ0eWZpZnR5IiwiY2hlY2tGaWZ0eUZpZnR5IiwiJGplcnJpZmllZCIsImZpZnR5SW5kZXgiLCJoZWxwZXJUaHJlZSIsImdlbmVyYXRlUGVyY2VudGFnZXMiLCJwZXJjZW50YWdlcyIsIk1hdGgiLCJyYW5kb20iLCJ0b3RhbCIsInJlZHVjZSIsInBlcmNlbnRhZ2UiLCJhIiwiYiIsIm1hcCIsInJvdW5kIiwiJGFza0F1ZGllbmNlIiwiYXNrVGhlQXVkaWVuY2UiLCJ0b3RhbFBlcmNlbnRhZ2VzIiwiJHJlc3VsdHMiLCIkYmFycyIsImVxIiwiY3NzIiwiZm9yRWFjaCIsInJldHVyblRvR2FtZSIsIiRzdGFydEJ1dHRvbiIsIiRyZXNldEJ1dHRvbiIsIiRidXR0b24xIiwiJG1lZXNlc2Vla3NCdXR0b24iLCIkZHVtYkRvd24iLCIkYXVkaWVuY2VSZXR1cm4iLCJv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LFVBQ2R3RSxFQUFvQnhFLEVBQUEsd0JBQ3RCaUIsRUFBZ0IsRUFDZFMsRUFBTixFQUVJVixFQUFpQixJQWlLckJtRCxHQUFhTSxHQUFHLFFBQVN4RSxHQUd6QjBCLEVBQVM4QyxHQUFHLFFBQVNDLEdBR3JCcEUsRUFBU21FLEdBQUcsUUFBU3ZDLEdBRXJCb0MsRUFBa0JHLEdBQUcsUUFBU3JDLEdBRzlCNUIsRUFBU2lFLEdBQUcsUUFBU2xDLEdBRXJCZ0MsRUFBVUUsR0FBRyxRQUFTOUIsR0FHdEJsQyxFQUFTZ0UsR0FBRyxRQUFTM0IsR0FFckIwQixFQUFnQkMsR0FBRyxRQUFTUCxHQUc1QkUsRUFBYUssR0FBRyxRQUFTOUQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWFraW5nIGNoYW5nZXMgZm9yIGluaXRpYWwgY29tbWl0XG4kKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ0pTIGxvYWRlZCEnKTtcblxuXG4gIGNvbnN0ICRzdGFydEJ1dHRvbiA9ICQoJy5zdGFydC1idXR0b24nKTtcbiAgY29uc3QgJHJlc2V0QnV0dG9uID0gJCgnLnJlc2V0LWJ1dHRvbicpO1xuICBjb25zdCAkcXVlc3Rpb25Cb3ggPSAkKCcuY3VycmVudFEnKTtcblxuICBjb25zdCAkaW5zdHJ1Y3Rpb25zID0gJCgnI3N0YXJ0Jyk7XG4gIGNvbnN0ICR3ZWxsRG9uZSA9ICQoJyN3ZWxsLWRvbmUnKTtcbiAgY29uc3QgJGdhbWVCb2FyZCA9ICQoJyNnYW1lLWJvYXJkJyk7XG4gIGNvbnN0ICRwaG9uZUZyaWVuZCA9ICQoJyNtZWVzZWVrcy1ib3gnKTtcbiAgY29uc3QgJGplcnJpZmllZCA9ICQoJyNmaWZ0eS1maWZ0eScpO1xuICBjb25zdCAkYXNrQXVkaWVuY2UgPSAkKCcjY291bmNpbCcpO1xuICBjb25zdCAkZ2FtZU92ZXIgPSAkKCcjZ2FtZS1vdmVyJyk7XG5cbiAgY29uc3QgJGNob2ljZTEgPSAkKCcuY2hvaWNlMScpO1xuICBjb25zdCAkY2hvaWNlMiA9ICQoJy5jaG9pY2UyJyk7XG4gIGNvbnN0ICRjaG9pY2UzID0gJCgnLmNob2ljZTMnKTtcbiAgY29uc3QgJGplcnJ5MSA9ICQoJyNjaG9pY2UxJyk7XG4gIGNvbnN0ICRqZXJyeTIgPSAkKCcjY2hvaWNlMicpO1xuXG5cbiAgY29uc3QgJGJ1dHRvbjEgPSAkKCcub3B0aW9uMScpO1xuICBjb25zdCAkYnV0dG9uMiA9ICQoJy5vcHRpb24yJyk7XG4gIGNvbnN0ICRidXR0b24zID0gJCgnLm9wdGlvbjMnKTtcbiAgY29uc3QgJGJ1dHRvbjQgPSAkKCcub3B0aW9uNCcpO1xuICBjb25zdCAkYnV0dG9ucyA9ICQoJy5hbnN3ZXInKTtcbiAgY29uc3QgJG1lZXNlc2Vla3NCdXR0b24gPSAkKCcubWVlc2VzZWVrc0J1dHRvbicpO1xuICBjb25zdCAkZHVtYkRvd24gPSAkKCcuamVycnknKTtcbiAgY29uc3QgJGF1ZGllbmNlUmV0dXJuID0gJCgnLmNvbGxlY3Rpb25vZmRvdWNoZXMnKTtcbiAgbGV0IHF1ZXN0aW9uSW5kZXggPSAwO1xuICBjb25zdCByaWdodEluZGV4ID0gMDtcblxuICBsZXQgcXVlc3Rpb25PYmplY3QgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICAkaW5zdHJ1Y3Rpb25zLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkZ2FtZUJvYXJkLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkY2hvaWNlMS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAkY2hvaWNlMi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAkY2hvaWNlMy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICBzaG93UXVlc3Rpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3RhcnRHYW1lKCl7XG4gICAgJGluc3RydWN0aW9ucy5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJHdlbGxEb25lLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkZ2FtZU92ZXIuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICRjaG9pY2UxLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICRjaG9pY2UyLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICRjaG9pY2UzLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgIHNob3dRdWVzdGlvbigpO1xuICAgIHNodWZmbGUocXVlc3Rpb25CYW5rKTtcblxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1F1ZXN0aW9uKCkge1xuICAgIHF1ZXN0aW9uT2JqZWN0ID0gcXVlc3Rpb25CYW5rW3F1ZXN0aW9uSW5kZXhdO1xuXG4gICAgLy8gaWYgdGhlIG51bWJlciBvZiBxdWVzdGlvbnMgaW5kZXggPSAxNSAtIHNlbmRzIHVzZXIgdG8gd2VsbCBkb25lIHNjcmVlblxuICAgIGlmIChxdWVzdGlvbkluZGV4ID09PSAxNSl7XG4gICAgICAkaW5zdHJ1Y3Rpb25zLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICRnYW1lT3Zlci5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAkZ2FtZUJvYXJkLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICR3ZWxsRG9uZS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICBxdWVzdGlvbkluZGV4ID0gMDtcbiAgICAgIC8vIGVsc2UgaXQgY2FycnlzIG9uIHRoZSBnYW1lXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vICBhZGRzIHF1ZXN0aW9uIHByb3BlcnR5IHRvIHRoZSBxdWVzdGlvbiBib3hcbiAgICAgICRxdWVzdGlvbkJveC5odG1sKHF1ZXN0aW9uT2JqZWN0LnF1ZXN0aW9uKTtcbiAgICAgIC8vIGFuZCBhZGRzIGFuc3dlciBhcnJheSBlbGVtZW50cyB0byB0aGUgYnV0dG9uc1xuICAgICAgJGJ1dHRvbjEuaHRtbChxdWVzdGlvbk9iamVjdC5hbnN3ZXJzWzBdKTtcbiAgICAgICRidXR0b24yLmh0bWwocXVlc3Rpb25PYmplY3QuYW5zd2Vyc1sxXSk7XG4gICAgICAkYnV0dG9uMy5odG1sKHF1ZXN0aW9uT2JqZWN0LmFuc3dlcnNbMl0pO1xuICAgICAgJGJ1dHRvbjQuaHRtbChxdWVzdGlvbk9iamVjdC5hbnN3ZXJzWzNdKTtcbiAgICAgIHF1ZXN0aW9uSW5kZXggKys7XG4gICAgfVxuICB9XG5cbiAgLy8gdGhpcyBmdW5jdGlvbiBjaGVja3MgdGhlIGluZGV4IG9mIHRoZSBidXR0b24gY2xpY2tlZCB3aXRoIHRoZSBpbmRleCBvZiB0aGUgYW5zd2VycyBhcnJheSBhbmQgY29tcGFyZXMgdGhlbS4gSWYgdGhleSBhcmUgdGhlIHNhbWUgaXQgcnVucyB0aGUgbmV4dCBxdWVzdGlvbi4gSWYgbm90IHRoZW4gaXQgdGFrZXMgdGhlIHVzZXIgdG8gdGhlIGdhbWUgb3ZlciBzY3JlZW4uXG4gIGZ1bmN0aW9uIGNoZWNrQnV0dG9ucyAoZSl7XG4gICAgY29uc3QgSXNJdGNvcnJlY3QgPSBxdWVzdGlvbkJhbmtbcmlnaHRJbmRleF07XG4gICAgLy8gcHVzaGVzIHRoZSBxdWVzdGlvbnMgZnJvbSB0aGUgcXVlc3Rpb24gYXJyYXkgaW50byB0aGUgYnV0dG9uc1xuICAgICRidXR0b25zLmh0bWwoSXNJdGNvcnJlY3QuY29ycmVjdEluZGV4W3JpZ2h0SW5kZXhdKTtcblxuICAgIC8vIGNvbXBhcmVzIGJ1dHRvbiBpbmRleCB0byB0aGUgaW5kZXggb2YgY29ycmVjdCBxdWVzdGlvbiAtIGlmIHRoZSBzYW1lID0gbmV4dCBxdWVzdGlvblxuICAgIGlmIChxdWVzdGlvbk9iamVjdC5jb3JyZWN0SW5kZXggPT09ICQoZS50YXJnZXQpLmluZGV4KCkpe1xuICAgICAgY29uc29sZS5sb2coJ3dvcmtpbmchJyk7XG5cblxuICAgICAgc2hvd1F1ZXN0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3lvdSBkaWVkJyk7XG4gICAgICAkaW5zdHJ1Y3Rpb25zLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICRnYW1lT3Zlci5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAkZ2FtZUJvYXJkLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgIHF1ZXN0aW9uSW5kZXggPSAwO1xuICAgIH1cblxuICB9XG5cbiAgLy8gZ2FtZWJvYXJkIGhpZGRlbiBwaG9uZSBhIGZyaWVuZCB1bmhpZGRlblxuICBmdW5jdGlvbiBoZWxwZXJPbmUgKCl7XG4gICAgJHBob25lRnJpZW5kLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkZ2FtZUJvYXJkLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIGFsZXJ0cyBjb3JyZWN0IGFuc3dlciBhbmQgdGhlbiBzZW5kcyB1c2VyIGJhY2sgdG8gZ2FtZWJvYXJkIC0gYnV0dG9uIGRpc2JhbGVkIGFmdGVyIHVzZVxuICBmdW5jdGlvbiBtck1lZXNlZWtzKCl7XG4gICAgY29uc3QgY29ycmVjdEFuc3dlciA9IHF1ZXN0aW9uT2JqZWN0LmFuc3dlcnNbcXVlc3Rpb25PYmplY3QuY29ycmVjdEluZGV4XTtcbiAgICAkcGhvbmVGcmllbmQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICRnYW1lQm9hcmQucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgIGFsZXJ0KGNvcnJlY3RBbnN3ZXIpO1xuICAgICRjaG9pY2UxLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoZWxwZXJUd28oKXtcblxuICAgICRqZXJyaWZpZWQucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICRnYW1lQm9hcmQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuXG4gICAgJGplcnJ5MS5odG1sKHF1ZXN0aW9uT2JqZWN0LmFuc3dlcnNbcXVlc3Rpb25PYmplY3QuZmlmdHlmaWZ0eVswXV0pO1xuICAgICRqZXJyeTIuaHRtbChxdWVzdGlvbk9iamVjdC5hbnN3ZXJzW3F1ZXN0aW9uT2JqZWN0LmZpZnR5ZmlmdHlbMV1dKTtcbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbk9iamVjdC5maWZ0eWZpZnR5WzBdKTtcbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbk9iamVjdC5maWZ0eWZpZnR5WzFdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrRmlmdHlGaWZ0eSAoZSl7XG5cbiAgICBpZiAocXVlc3Rpb25PYmplY3QuZmlmdHlJbmRleCA9PT0gJChlLnRhcmdldCkuaW5kZXgoJ2J1dHRvbi5qZXJyeScpKXtcbiAgICAgIC8vIHF1ZXN0aW9uSW5kZXggKys7XG5cbiAgICAgIGNvbnNvbGUubG9nKCd5b3UgbGl2ZScpO1xuICAgICAgY29uc29sZS5sb2cocXVlc3Rpb25PYmplY3QuY29ycmVjdEluZGV4KTtcbiAgICAgIGNvbnNvbGUubG9nKCQoZS50YXJnZXQpKTtcbiAgICAgIGNvbnNvbGUubG9nKCQoZS50YXJnZXQpLmluZGV4KCkpO1xuICAgICAgJGdhbWVCb2FyZC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAkamVycmlmaWVkLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgIHNob3dRdWVzdGlvbigpO1xuICAgICAgJGNob2ljZTIucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3lvdSBkaWVkJyk7XG4gICAgICBjb25zb2xlLmxvZyhxdWVzdGlvbk9iamVjdC5maWZ0eUluZGV4KTtcbiAgICAgIGNvbnNvbGUubG9nKCQoZS50YXJnZXQpKTtcbiAgICAgIGNvbnNvbGUubG9nKCQoZS50YXJnZXQpLmluZGV4KCkpO1xuICAgICAgJGdhbWVPdmVyLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICRqZXJyaWZpZWQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuXG4gICAgICBxdWVzdGlvbkluZGV4ID0gMDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoZWxwZXJUaHJlZSAoKSB7XG4gICAgJGFza0F1ZGllbmNlLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkZ2FtZUJvYXJkLmFkZENsYXNzKCdoaWRkZW4nKTtcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUGVyY2VudGFnZXMoKSB7XG4gICAgICBjb25zdCBwZXJjZW50YWdlcyA9IFtNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpXTtcbiAgICAgIGNvbnN0IHRvdGFsID0gcGVyY2VudGFnZXMucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XG5cbiAgICAgIHJldHVybiBwZXJjZW50YWdlcy5tYXAoKHBlcmNlbnRhZ2UpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoKHBlcmNlbnRhZ2UgLyB0b3RhbCkgKiAxMDApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGFza1RoZUF1ZGllbmNlID0gZ2VuZXJhdGVQZXJjZW50YWdlcygpO1xuICAgIGxldCB0b3RhbFBlcmNlbnRhZ2VzID0gYXNrVGhlQXVkaWVuY2UucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XG5cbiAgICB3aGlsZSh0b3RhbFBlcmNlbnRhZ2VzICE9PSAxMDApIHtcbiAgICAgIGFza1RoZUF1ZGllbmNlID0gZ2VuZXJhdGVQZXJjZW50YWdlcygpO1xuICAgICAgdG90YWxQZXJjZW50YWdlcyA9IGFza1RoZUF1ZGllbmNlLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdBZnRlciBsb29wJywgYXNrVGhlQXVkaWVuY2UsIHRvdGFsUGVyY2VudGFnZXMpO1xuXG4gICAgY29uc3QgJGJhcnMgPSAkKCcuYmFyJyk7XG4gICAgY29uc3QgJHJlc3VsdHMgPSAkKCcucmVzdWx0cyBsaScpO1xuXG4gICAgYXNrVGhlQXVkaWVuY2UuZm9yRWFjaCgocGVyY2VudGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICRiYXJzLmVxKGluZGV4KS5jc3MoJ2hlaWdodCcsIGAke3BlcmNlbnRhZ2V9JWApO1xuICAgICAgJHJlc3VsdHMuZXEoaW5kZXgpLnRleHQoYCR7cGVyY2VudGFnZX0lYCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHJldHVyblRvR2FtZSAoKSB7XG4gICAgJGFza0F1ZGllbmNlLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkZ2FtZUJvYXJkLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkY2hvaWNlMy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICB9XG5cblxuICAvLyBjbGljayBzdGFydCBidXR0b24gLSBzdGFydHMgbmV3IGdhbWVcbiAgJHN0YXJ0QnV0dG9uLm9uKCdjbGljaycsIHN0YXJ0R2FtZSk7XG5cbiAgLy8gd2hlbiBvbmUgb2YgdGhlIGNob2ljZSBidXR0b25zIGlzIGNsaWNrZWQgLSBjaGVjayBpZiBidXR0b24gY29udGFpbmluZyBjb3JyZWN0IGFuc3dlciBpcyBjbGlja2VkXG4gICRidXR0b25zLm9uKCdjbGljaycsIGNoZWNrQnV0dG9ucyk7XG4gIC8vIHdoZW4gaGVscGVyMSBidXR0b24ocGhvbmUgYSBmcmllbmQpIGlzIGNsaWNrZWQgLSBydW4gTXIgTWVlc2Vla3NcblxuICAkY2hvaWNlMS5vbignY2xpY2snLCBoZWxwZXJPbmUpO1xuICAvLyBpZiBjYW4gZG8gYnV0dG9uIGlzIGNsaWNrZWQgLSBydW4gbXIgbWVlc2Vla3MgZnVuY3Rpb24gYW5kIGZpbmQgb3V0IHRoZSBhbnN3ZXIgKyByZXR1cm4gdG8gZ2FtZSBzY3JlZW5cbiAgJG1lZXNlc2Vla3NCdXR0b24ub24oJ2NsaWNrJywgbXJNZWVzZWVrcyk7XG5cbiAgLy9pZiBoZWxwZXIyIGJ1dHRvbig1MDo1MCkgaXMgY2xpY2tlZCBydW4gZmlmdHlmaWZ0eSBmdW5jdGlvblxuICAkY2hvaWNlMi5vbignY2xpY2snLCBoZWxwZXJUd28pO1xuICAvLyBpZiBmaWZ0eSBmaWZ0eSBidXR0b24gaXMgY2xpY2tlZCAtIHJ1biBjaGVjayBmaWZ0eSBmaWZ0eVxuICAkZHVtYkRvd24ub24oJ2NsaWNrJywgY2hlY2tGaWZ0eUZpZnR5KTtcbiAgLy8gY2xpY2sgb2YgaGVscGVyIHRocmVlIHJ1bnMgYXNrIHRoZSBhdWRpZW5jZSBwZXJjZW50YWdlcyBmdW5jdGlvblxuXG4gICRjaG9pY2UzLm9uKCdjbGljaycsIGhlbHBlclRocmVlKTtcbiAgLy8gY2xpY2sgb2YgYXVpZGVuY2VyZXR1cm4gYnV0dG9uIHRha2VzIHVzZXIgYmFjayB0byBnYW1lXG4gICRhdWRpZW5jZVJldHVybi5vbignY2xpY2snLCByZXR1cm5Ub0dhbWUpO1xuXG4gIC8vIHJlc3RhcnRzIHRoZSBnYW1lIGFuZCBzaHVmZmxlcyB0aGUgcXVlc3Rpb25zXG4gICRyZXNldEJ1dHRvbi5vbignY2xpY2snLCByZXN0YXJ0R2FtZSk7XG5cblxufSk7XG4iXX0=
